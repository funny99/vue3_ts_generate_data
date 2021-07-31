export default {
    id: 1,
    projectName: '国庆节',
    fields: [
        {
            name: 'actStartTime',
            label: '开始时间',
            type: 'date',
        },
        {
            name: 'actEndTime',
            label: '结束时间',
            type: 'date',
        },
        {
            name: 'rule',
            label: '规则',
            type: 'textarea',
        },
        {
            name: 'bgImg',
            label: '背景图',
            type: 'text',
        },
        {
            name: 'grids',
            label: '宫格',
            type: 'array',
            childFields: [
                {
                    name: 'name',
                    label: '名称',
                    type: 'text',
                },
                {
                    name: 'iconImgUrl',
                    label: 'icon',
                    type: 'text',
                },
                {
                    name: 'type',
                    label: '类型',
                    type: 'text',
                },
                {
                    name: 'prizeImgUrl',
                    label: '奖品图',
                    type: 'text',
                },
            ],
        }
    ],

}