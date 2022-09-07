export default interface Props {
    /**
     * @description 状态类型
     * @default default
     */
    type?:string;

    /**
     * 文本内容
     * @default default
     */
    text:string;

    /**
     * 按钮大小
     * medium,small,mini
     * @default default
     */
    size?:string;

    /**
     * 是否启用禁止状态
     * @default false
     */
    disable?:boolean;

    /**
     * 是否为圆形按钮
     * @default false
     */
    cicle?:boolean;

    /**
     * 点击回调函数
     * @default none
     */
    handleClick():void

}