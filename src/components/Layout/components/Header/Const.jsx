import icons from '~/utils/icons';

const { MdLanguage, FaRegQuestionCircle, CgKeyboard } = icons;

const MENU_ITEMS = [
    {
        icon: <MdLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FaRegQuestionCircle />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <CgKeyboard />,
        title: 'Keyboard shortcuts',
        response: 'Soon update',
    },
];

export { MENU_ITEMS };
