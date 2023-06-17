import { createElement } from "./helper.js";

// Создаем модальное окно и все его элементы внутри
export const renderModal = ({
  title,
  description,
  btnSubmit,
  submitHandler,
}) => {
  const modal = createElement('div', {
    className: 'modal',
  });

  const modalMain = createElement('div', {
    className: 'modal__main',
  });

  const modalTitle = createElement('h2', {
    className: 'modal__title',
    textContent: title,
  });

  const modalDiscription = createElement('p', {
    className: 'modal__description',
    textContent: description,
  });

  const modalForm = createElement('form', {
    className: 'modal__form',
  });

  modalForm.addEventListener ('submit', async (e) => {
    e.preventDefault();
    const itsOk = await submitHandler(e);
    if (itsOk) {
      modal.remove();
    }

    const modalField = createElement('fieldset', {
      className: 'modalField',
    });

    const modalLabelLogin = createElement('label', {
      className: 'modalLabel',
    })

    const modalInputLogin = createElement('input', {
      className: 'modal__input',
      type: 'text',
      name: 'login',
      placeholder: 'Логин',
      required: true,
    });

    const modalLabelPassword = createElement('label', {
      className: 'modalLabel',
    })

    const modalInputPassword = createElement('input', {
      className: 'modal__input',
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      required: true,
    });

  })
};