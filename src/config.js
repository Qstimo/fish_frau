export const LINKS = {
    BAR: 'menu/bar',
    KITCHEN: "/menu/kitchen",
    RESERVATION: "reservation",
    ADVANTAGES: "advantages",
    CHEF: "chef",
    ORDER: "ORDER"

}
export const LinksHeader = [
    { name: 'БЛЮДА ОТ ШЕФА', link: LINKS.CHEF },
    {
        name: 'МЕНЮ',
        links: [
            { name: "Бар", link: LINKS.BAR },
            { name: "Кухня", link: LINKS.KITCHEN },
        ]
    },
    { name: 'БРОНЬ', link: LINKS.RESERVATION },
    { name: 'ЗАКАЗАТЬ', link: LINKS.ORDER },

]
export const initialValuesReservationList = {
    email: { value: "", placeholder: "primer@mial.ru", title: "Электронная почта (необязательно):" },
    date: { value: "", placeholder: "2024-05-10", title: "Дата:" },
    guests: { value: "", placeholder: "", title: "Количество гостей:" },
    name: { value: "", placeholder: "Иван Иванов", title: "Ваше имя:" },
    time: { value: "", placeholder: "", title: "Время:" },
    phone: { value: "", placeholder: "+7(999)000-00-00", title: "Телефон:" }
}
export const initialReservationValues = {
    email: "", guests: "", date: "", time: "", name: "", phone: ""
}
export const initialValuesReviewList = {
    email: { value: "", placeholder: "primer@mial.ru", title: "E-mail *:" },
    name: { value: "", placeholder: "Иван Иванов", title: "Ваше имя *:" },
    textarea: { value: "", placeholder: "", title: "Сообщение *:", styles:{ height:"100px", resize: "none",}, component:'textarea' }
}
export const initialReviewValues = {
    email: "",  name: "", textarea:""
}