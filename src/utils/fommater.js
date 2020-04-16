
export function formatDate(milisec) {
    if(!milisec) return '';
    let date = new Date(milisec);
    return date.getFullYear() + '-'+ (date.getMonth()+1) + '-' +date.getDate() + ' ' 
            + date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
}