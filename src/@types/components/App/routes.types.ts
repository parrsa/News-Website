export interface RoutesInterface {
    type: string;
    name: string;
    key: string;
    route: string;
    TabId?: number,
    element: React.FC;
}

export interface ListRoute {
    text: string;
    key?: string;
    path: string;
    name: string;
    icon?: React.ReactNode;
    Tablist?: any
    id: number;
    children?: any
    component?: React.ReactNode

}