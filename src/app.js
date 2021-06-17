const app = new Vue(

    {

        el: '#root',

        data: {

            navLink: [
                {
                    text: "home",
                    class: '',
                },
                {
                    text: "about",
                    class: '',
                },
                {
                    text: "services",
                    class: '',
                },
                {
                    text: "pricing",
                    class: '',
                },
                {
                    text: "blog",
                    class: '',
                },

            ],

            keyIndicators: [

                {
                    emoticon: 'fas fa-user-friends',
                    title: 'Human Capital',
                    par: 'Humanizing business: Harness the power of technology to improve the way people work.'

                },
                {
                    emoticon: 'fas fa-chart-pie',
                    title: 'Core Business',
                    par: 'It takes innovative approaches to transform, modernize, and run existing platforms.'

                },


                {
                    emoticon: 'fas fa-tachometer-alt',
                    title: 'Performance',
                    par: 'Achieving maximum impact and value from investments in finance and supply chain.'

                },




            ],


            corporateValue: [
                {
                    emoticon: 'fas fa-certificate',
                    title: 'Tradition',
                    par: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },
                {
                    emoticon: 'fas fa-lock',
                    title: 'Security',
                    par: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },
                {
                    emoticon: 'far fa-edit',
                    title: 'Certificate',
                    par: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },
                {
                    emoticon: 'fas fa-graduation-cap',
                    title: 'Expertise',
                    par: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },



            ],

            corporateService: [

                {
                    emoticon: 'grid_view',
                    rule: 'material-icons',
                    title: 'Audit & Assurance',
                    par: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },
                {
                    emoticon: 'business_center',
                    rule: '',
                    title: 'Financial Advisory',
                    par: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },
                {
                    emoticon: 'leaderboard',
                    rule: '',
                    title: 'Analytics & M&A',
                    par: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },
                {
                    emoticon: 'flight',
                    rule: 'rotation',
                    title: 'Middle Marketing',
                    par: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },
                {
                    emoticon: 'public',
                    rule: '',
                    title: 'Legal Consulting',
                    par: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },
                {
                    emoticon: 'inbox',
                    rule: '',
                    title: 'Regulatory Risk',
                    par: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },

            ],


            corporateNews: [

                {
                    path: 'news-1',
                    par: 'Increasing creativity is possible for everyone',
                },
                {
                    path: 'news-2',
                    par: 'Beacause market research is part of the business plan',
                },
                {
                    path: 'news-3',
                    par: 'Working from home is now a trend',
                },
                // {
                //     path: 'news-4',
                //     par: 'Increasing creativity is possible for everyone',
                // },
                // {
                //     path: 'news-5',
                //     par: 'Increasing creativity is possible for everyone',
                // },
                // {
                //     path: 'news-5',
                //     par: 'Increasing creativity is possible for everyone',
                // },





            ],


            generalInfo: [

                {
                    title: 'About',
                    info: [
                        'the company',
                        'Istitutional',
                        'Social & Events',
                        'Innovation',
                        'Enviroment',
                        'Technology',

                    ],

                },

                {
                    title: 'Services',
                    info: [
                        'Audit & Assurance',
                        'Financial Advisory',
                        'Analytics M&A',
                        'Middle Marketing',
                        'Legal Consulting',
                        'Regulatory Risk',

                    ],

                },

                {
                    title: 'Support',
                    info: [
                        'Responsability',
                        'Terms of Use',
                        'About Cockies',
                        'Privacy Policy',
                        'Accessibility',
                        'Information',

                    ],

                },













            ],












        },


        methods: {



        },













    });