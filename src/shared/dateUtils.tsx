export const formatNoticeDate = (createdAt: string) => {
  const date = new Date(createdAt);

  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}`;
  return formattedDate;
};
export const formatDetailDate = (updatedAt: string) => {
  const date = new Date(updatedAt);

  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}`;
  return formattedDate;
};
export const formatVoteDate = (createdAt: string) => {
  const date = new Date(createdAt);

  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
};
export const getElapsedTime = (createdAt: string) => {
  const createdTime = new Date(createdAt).getTime();
  const currentTime = new Date().getTime();
  const elapsedTimeInMs = currentTime - createdTime;

  // 분 단위
  const minutes = Math.floor(elapsedTimeInMs / (1000 * 60));
  if (minutes < 60) {
    return `${minutes}분 전`;
  }

  // 시간 단위
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}시간 전`;
  }

  // 일 단위
  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days}일 전`;
  }

  // 달 단위
  const months = Math.floor(days / 30);
  return `${months}달 전`;
};
