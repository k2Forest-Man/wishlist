// Функция для создания элемента на странице

export const createElement = (tagName, attribute) => {
  const elem = document.createElement(tagName);
  Object.assign(elem, attribute);
  return elem;
};

// Функция для определения склонения числа возраста пользователя
export const pluralizeYears = (age) => {
  let years = age % 100;

  if (years >= 11 && years <= 19) {
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

// Функция позволяющая создать дату рождения на странице, выбранную пользователем
export const createSelectDate = (selectDay, selectMonth, selectYear, birhdate) => {
  for (let day = 0; day <= 31; day++) {
    const option = document.createElement('option');
    option.value = day ? day : '';
    option.text = day ? day : '';
    selectDay.append(option);
  }

  const months = [
    '',
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];

  for (let i = 0; i < months.length; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = months[i];
    selectMonth.append(option);
  }

  const currentYear = new Date().getFullYear();

  const optionYear = document.createElement('option');
  optionYear.value = '';
  optionYear.text = '';
  selectYear.append(optionYear);

  for (let year = currentYear; year >= currentYear - 100; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.text = year;
    selectYear.append(option);
  }

  if (birhdate) {
    const [day, month, year] = birhdate.split('/');
    selectDay.value = day;
    selectMonth.value = month;
    selectYear.value = year;
  }

  [selectDay, selectMonth, selectYear].forEach(dateSelect => {
    dateSelect.addEventListener('change', ({currentTarget}) => {
      currentTarget.blur();
    });
  });

};