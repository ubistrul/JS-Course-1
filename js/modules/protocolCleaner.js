const httpsLink = 'https://replit.com/@hexlet/js-basics-define-functions-parameters';
const httpLink = 'http://replit.com/@hexlet/js-basics-define-functions-parameters';
const withoutProtocolLink = 'replit.com/@hexlet/js-basics-define-functions-parameters';

const truncate = (text, length) => {
	return text.slice(text[0], length) + '...';
};

const removeProtocolHTTPS = (link) => link.replace('https://', '');
const removeProtocolHTTP = (link) => link.replace('http://', '');

const removeProtocolFromLink = (link) => {
	if (link.search('https://') != -1) {
		return link.replace('https://', '');
	}
	else if (link.search('http://') != -1) {
		return link.replace('http://', '');
	}
	else {console.log('Линк не содержит протокол');}
	return;
};

// console.log(truncate(text, 32));
// truncate(text, 32);

// console.log(removeProtocolHTTPS(text));
// removeProtocolHTTPS(text);

console.log(removeProtocolFromLink(httpsLink));
console.log(removeProtocolFromLink(httpLink));
console.log(removeProtocolFromLink(withoutProtocolLink));