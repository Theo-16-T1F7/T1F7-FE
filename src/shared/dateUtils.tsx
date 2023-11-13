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
