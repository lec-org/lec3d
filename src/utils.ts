/** 转换旋转参数:
 *  1. 参数类型为 number -> 直接使用
 *  2. 参数类型为 string -> 转换为角度, 然后再使用
 */
export const transferRotationValue = (param?: string | number): number => {
  if (typeof param === "string") {
    return (Math.PI / 180) * +param;
  }
  if (typeof param === "number") {
    return param;
  }
  return 0;
};

export default {
  transferRotationValue,
};
