// Функция для создания элемента на странице

export const createElement = (tagName, attribute) => {
  const elem = document.createElement(tagName);
  Object.assign(elem, attribute);
  return elem;
};

// Функция для определения склонения числа возраста пользователя
export const pluralizeYears = (age) => {
  let years = age % 100;

  if(years >= 11 && years <= 19) {
    return 'лет';
  } else {
    let lastDijit = years % 10;
    if (lastDijit === 1) {
      return 'год';
    } else if (lastDijit >= 2 && lastDijit <= 4) {
      return 'года';
    } else {
      return 'лет';
    }
  }
};

// При смене картинки, эта функция при выборе файла(аватарки) будет менят на картинку пользователя
export const handleImageFileSelection = (input, image) => {
  // !TODO
};