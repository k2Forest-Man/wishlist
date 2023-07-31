import { API_URL } from "./const";
import { createElement } from "./helper";
import { getUser } from "./serviceAPI.js";

export const createEditProfile = async (login) => {
  const user = await getUser(login);

  const sectionEditProfile = createElement('section', {
    className: 'edit edit_profile',
  });

  const container = createElement('div', {
    className: 'container',
  });

  section.append(container);

  const formProfile = createElement('form', {
    className: 'edit__form',
  });

  formProfile.addEventListener('submit', (e) => {
    // !TODO
  });

  const editAvatar = createElement('fieldset', {
    className: 'edit__avatar',
  });

  const editAvatarImage = createElement('img', {
    className: 'edit__avatar-image',
    src: `${API_URL}/${user.avatar}`,
    alt: `Аватар ${user.login}`,
  });

  const editAvatarLoad = createElement('div', {
    className: 'edit__avatar-load',
  });

  
  return {sectionEditProfile, formProfile}
};