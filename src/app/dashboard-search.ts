export interface DashboardSearch {
    id: number;
    uid: string;
    title: string;
    uri: string;
    url: string;
    slug: string;
    type: string;
    tags?: (null)[] | null;
    isStarred: boolean;
    sortMeta: number;
}
