function рекомендуемыеЧаевые() {
    let процентЧаевых = prompt('Пожалуйста, укажите размер чаевых.');
    процентЧаевых /= 100;
    const суммаЗаказа = prompt('Пожалуйста, укажите стоимость вашего заказа.');
    const знаковПослеЗапятой = 2;
    const чаевые = (суммаЗаказа * процентЧаевых).
          toFixed(знаковПослеЗапятой);
    
    return 'Рекомендуемые чаевые для вашего заказа - ' + чаевые;
}