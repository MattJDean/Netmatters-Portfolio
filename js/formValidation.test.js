import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

global.fetch = fetch;

import { initializeFormValidation } from '../formValidation.js';

describe('Form Validation', () => {
  let form, successModal, modalMessage, closeModal;

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="contactForm"></form>
      <div id="successModal"></div>
      <div id="modalMessage"></div>
      <span class="close"></span>
    `;

    form = document.getElementById('contactForm');
    successModal = document.getElementById('successModal');
    modalMessage = document.getElementById('modalMessage');
    closeModal = document.querySelector('.close');

    initializeFormValidation();
  });
});
test('Should prevent default form submission when the form is submitted', () => {
  const mockPreventDefault = jest.fn();
  const event = { preventDefault: mockPreventDefault };

  form.dispatchEvent(new Event('submit'));

  expect(mockPreventDefault).toHaveBeenCalled();
});test('Should clear previous error messages before form validation', () => {
  // Add some error messages
  const errorDiv1 = document.createElement('div');
  errorDiv1.className = 'error';
  errorDiv1.textContent = 'Test error 1';
  const errorDiv2 = document.createElement('div');
  errorDiv2.className = 'error';
  errorDiv2.textContent = 'Test error 2';
  document.body.appendChild(errorDiv1);
  document.body.appendChild(errorDiv2);

  // Trigger form submission
  form.dispatchEvent(new Event('submit'));

  // Check if error messages were cleared
  const remainingErrors = document.querySelectorAll('.error');
  expect(remainingErrors.length).toBe(0);
});test('Should validate the form before sending data to the server', async () => {
  // Mock validateForm function
  const mockValidateForm = jest.fn().mockReturnValue(true);
  global.validateForm = mockValidateForm;

  // Mock fetch function
  const mockFetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ success: true })
  });
  global.fetch = mockFetch;

  // Mock other functions
  global.clearErrors = jest.fn();
  global.showModal = jest.fn();
  global.disableForm = jest.fn();

  // Trigger form submission
  await form.dispatchEvent(new Event('submit'));

  // Check if validateForm was called
  expect(mockValidateForm).toHaveBeenCalled();

  // Check if fetch was called (indicating data was sent to server)
  expect(mockFetch).toHaveBeenCalledWith('submit_contact.php', expect.any(Object));

  // Check if success modal was shown
  expect(global.showModal).toHaveBeenCalledWith('Your message has been sent successfully!');

  // Check if form was disabled
  expect(global.disableForm).toHaveBeenCalled();
});test('Should display a success message when the server responds with success', async () => {
  // Mock the fetch function to return a successful response
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ success: true })
  });

  // Mock the showModal and disableForm functions
  global.showModal = jest.fn();
  global.disableForm = jest.fn();

  // Mock validateForm to return true
  global.validateForm = jest.fn().mockReturnValue(true);

  // Trigger form submission
  await form.dispatchEvent(new Event('submit'));

  // Check if the success message was displayed
  expect(global.showModal).toHaveBeenCalledWith('Your message has been sent successfully!');

  // Check if the form was disabled
  expect(global.disableForm).toHaveBeenCalled();
});test('Should disable the form after a successful submission', async () => {
  // Mock the fetch function to return a successful response
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ success: true })
  });

  // Mock the necessary functions
  global.validateForm = jest.fn().mockReturnValue(true);
  global.clearErrors = jest.fn();
  global.showModal = jest.fn();
  global.disableForm = jest.fn();

  // Add form fields to the form
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.name = 'testInput';
  form.appendChild(inputField);

  // Trigger form submission
  await form.dispatchEvent(new Event('submit'));

  // Check if disableForm was called
  expect(global.disableForm).toHaveBeenCalled();

  // Check if the form fields are disabled
  const formFields = form.querySelectorAll('input, textarea, button');
  formFields.forEach(field => {
    expect(field.disabled).toBe(true);
    expect(field.classList.contains('disabled')).toBe(true);
  });
});