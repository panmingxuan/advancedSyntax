/**
 *
 */
//原始方法
function getResult(status) {
  if (status === 0) {
    return 'offline';
  } else if (status === 1) {
    return 'online';
  } else if (status === 2) {
    return 'deleted';
  }
  return 'error';
}
//使用静态变量
const StatusValue = {
  OFFLINE: 0,
  ONLINE: 1,
  DELETED: 2,
};
function getResultByConstStatusValue(status) {
  if (status === StatusValue.OFFLINE) {
    return 'offline';
  } else if (status === StatusValue.ONLINE) {
    return 'online';
  } else if (status === StatusValue.DELETED) {
    return 'deleted';
  }
  return 'error';
}
//使用枚举
enum StatusEnum {
  OFFLINE,
  ONLINE,
  DELETED,
}
function getResultByEnum(status) {
  if (status === StatusEnum.OFFLINE) {
    return 'offline';
  } else if (status === StatusEnum.ONLINE) {
    return 'online';
  } else if (status === StatusEnum.DELETED) {
    return 'deleted';
  }
  return 'error';
}
