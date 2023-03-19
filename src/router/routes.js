import Home from '@/views/Home'
import About from '@/views/About'
import Rules from '@/views/Rules'

import News from '@/views/News'
import Call from '@/views/Call'
import NewsDetail from '@/views/Detail'
import NewsDetail2 from '@/views/Detail2'
import NewsDetail3 from '@/views/Detail3'
import NewsDetail4 from '@/views/Detail4'
import NewsDetail5 from '@/views/Detail5'
import NewsDetail6 from '@/views/Detail6'
import NewsDetail7 from '@/views/Detail7'
import NewsDetail8 from '@/views/Detail8'
import NewsDetail9 from '@/views/Detail9'
import NewsDetail10 from '@/views/Detail10'
import NewsDetail11 from '@/views/Detail11'
import NewsDetail12 from '@/views/Detail12'
import NewsDetail13 from '@/views/Detail13'
import Page1 from '@/views/Page1'
import Page2 from '@/views/Page2'
import Page3 from '@/views/Page3'
import Page4 from '@/views/Page4'
import Page5 from '@/views/Page5'
export default [
    {
        path:'/home',
        component:Home,
        name:'Home'
    },
    {
        path:'/about',
        component:About,
        name:'About'
    },
    {
        path:'/rules',
        component:Rules,
        name:'Rules'
    },
    {
        path:'/page1',
        component:Page1,
        name:'Page1'
    },
    {
        path:'/news',
        component:News,
        name:'News'
    },
    {
        path:'/call',
        component:Call,
        name:'Call'
    },
    {
        path:'/newsdetail',
        component:NewsDetail,
        name:'Detail'
    },
    {
        path:'/newsdetail2',
        component:NewsDetail2,
        name:'Detail2'
    },
    {
        path:'/newsdetail3',
        component:NewsDetail3,
        name:'Detail3'
    },
    {
        path:'/newsdetail4',
        component:NewsDetail4,
        name:'Detail4'
    },
    {
        path:'/newsdetail5',
        component:NewsDetail5,
        name:'Detail5'
    },
    {
        path:'/newsdetail6',
        component:NewsDetail6,
        name:'Detail6'
    },
    {
        path:'/newsdetail7',
        component:NewsDetail7,
        name:'Detail7'
    },
    {
        path:'/newsdetail8',
        component:NewsDetail8,
        name:'Detail8'
    },
    {
        path:'/newsdetail9',
        component:NewsDetail9,
        name:'Detail9'
    },
    {
        path:'/newsdetail10',
        component:NewsDetail10,
        name:'Detail10'
    },
    {
        path:'/newsdetail11',
        component:NewsDetail11,
        name:'Detail11'
    },
    {
        path:'/newsdetail12',
        component:NewsDetail12,
        name:'Detail12'
    },
    {
        path:'/newsdetail13',
        component:NewsDetail13,
        name:'Detail13'
    },
    {
        path:'/page2',
        component:Page2,
        name:'Page2'
    },
    {
        path:'/page3',
        component:Page3,
        name:'Page3'
    },
    {
        path:'/page4',
        component:Page4,
        name:'Page4'
    },
    {
        path:'/page5',
        component:Page5,
        name:'Page5'
    },
    {
        path:'*',
        redirect:'/home',
    }
]