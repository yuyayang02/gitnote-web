export function timestampToLocalDate(timestamp: number) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份补零
    const day = String(date.getDate()).padStart(2, '0');         // 日期补零
    return `${year}.${month}.${day}`;
}


export function articleURL(slug: string): string {
    return `/a/${slug}`
}

export function categoryURL(id: string): string {
    return `/c/${id}`
}

export function tagURL(name: string): string {
    return `/t/${name}`
}
