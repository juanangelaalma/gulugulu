const getDomainName = (url) => {
  const a = document.createElement('a');
  a.href = url;
  return 'https://' + a.hostname;
}

export default getDomainName;