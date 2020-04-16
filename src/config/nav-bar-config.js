import React from 'react';
import {
    HomeOutlined,
    UserOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    AccountBookOutlined,
    ClusterOutlined,
    DatabaseOutlined,
    UnorderedListOutlined,
    BarChartOutlined,
    LineChartOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

export default [
    {
        title: '首页',
        key: '/home',
        icon: <HomeOutlined/>
    },
    {
        title: '商品',
        key: '/productsub',
        icon: <AppstoreOutlined />,
        children: [
            {
                title: '品类管理',
                key: '/categary',
                icon: <UnorderedListOutlined />
            },
            {
                title: '商品管理',
                key: '/product',
                icon: <DatabaseOutlined />
            }
        ]
    },
    {
        title: '用户管理',
        key: '/user',
        icon: <UserOutlined />
    },
    {
        title: '角色管理',
        key: '/role',
        icon: <ClusterOutlined />
    },
    {
        title: '图表图形',
        key: '/chartSub',
        icon: <AreaChartOutlined />,
        children: [
            {
                title: '柱形图',
                key: '/bar',
                icon: <BarChartOutlined />
            },
            {
                title: '折线图',
                key: '/line',
                icon: <LineChartOutlined />
            },
            {
                title: '饼状图',
                key: '/pie',
                icon: <PieChartOutlined />
            },

        ]
    },
    {
        title: '订单管理',
        key: '/order',
        icon: <AccountBookOutlined />
    },
];