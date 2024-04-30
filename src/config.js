export const LINKS = {
    BAR: 'menu/bar',
    KITCHEN: "/menu/kitchen",
    RESERVATION: "reservation",
    ADVANTAGES: "advantages",
    CHEF: "chef"

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
    { name: 'ПРЕИМУЩЕСТВА', link: LINKS.ADVANTAGES },
]