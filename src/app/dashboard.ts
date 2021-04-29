export interface Dashboard {
    meta: Meta;
    dashboard: Dashboard1;
}
export interface Meta {
    type: string;
    canSave: boolean;
    canEdit: boolean;
    canAdmin: boolean;
    canStar: boolean;
    slug: string;
    url: string;
    expires: string;
    created: string;
    updated: string;
    updatedBy: string;
    createdBy: string;
    version: number;
    hasAcl: boolean;
    isFolder: boolean;
    folderId: number;
    folderTitle: string;
    folderUrl: string;
    provisioned: boolean;
    provisionedExternalId: string;
}
export interface Dashboard1 {
    annotations: Annotations;
    editable: boolean;
    gnetId?: null;
    graphTooltip: number;
    id: number;
    iteration: number;
    links?: (LinksEntity)[] | null;
    panels: (PanelsEntity)[];
    refresh: boolean;
    schemaVersion: number;
    style: string;
    tags?: (null)[] | null;
    templating: Templating;
    time: Time;
    timepicker: DefaultsOrTextOrAlertRuleTagsOrGraphOrTimepicker;
    timezone: string;
    title: string;
    uid: string;
    version: number;
}
export interface Annotations {
    list?: (ListEntity)[] | null;
}
export interface ListEntity {
    builtIn: number;
    datasource: string;
    enable: boolean;
    hide: boolean;
    iconColor: string;
    name: string;
    type: string;
}
export interface LinksEntity {
    asDropdown: boolean;
    icon: string;
    includeVars: boolean;
    keepTime: boolean;
    tags?: (null)[] | null;
    targetBlank: boolean;
    title: string;
    tooltip: string;
    type: string;
    url: string;
}
export interface PanelsEntity {
    collapsed?: boolean | null;
    datasource?: null;
    gridPos: GridPos;
    id: number;
    panels?: (null)[] | null;
    title: string;
    type: string;
    fieldConfig?: FieldConfig | null;
    options?: Options | null;
    pluginVersion?: string | null;
    targets: (TargetsEntity)[];
    description?: string | null;
    links?: (null)[] | null;
    alert?: Alert | null;
    aliasColors?: AliasColors | null;
    bars?: boolean | null;
    dashLength?: number | null;
    dashes?: boolean | null;
    fill?: number | null;
    fillGradient?: number | null;
    hiddenSeries?: boolean | null;
    legend?: Legend | null;
    lines?: boolean | null;
    linewidth?: number | null;
    nullPointMode?: string | null;
    percentage?: boolean | null;
    pointradius?: number | null;
    points?: boolean | null;
    renderer?: string | null;
    seriesOverrides?: (null)[] | null;
    spaceLength?: number | null;
    stack?: boolean | null;
    steppedLine?: boolean | null;
    thresholds?: (ThresholdsEntity)[] | null;
    timeFrom?: null;
    timeRegions?: (null)[] | null;
    timeShift?: null;
    tooltip?: Tooltip | null;
    transformations?: (TransformationsEntity | null)[] | null;
    xaxis?: Xaxis | null;
    yaxes?: (YaxesEntity)[] | null;
    yaxis?: Yaxis | null;
}
export interface GridPos {
    h: number;
    w: number;
    x: number;
    y: number;
}
export interface FieldConfig {
    defaults: Defaults;
    overrides?: (OverridesEntity | null)[] | null;
}
export interface Defaults {
    color?: ColorOrTooltipOptions | null;
    mappings?: (null)[] | null;
    thresholds?: Thresholds | null;
    unit?: string | null;
    custom?: Custom | null;
    max?: number | null;
    min?: number | null;
}
export interface ColorOrTooltipOptions {
    mode: string;
}
export interface Thresholds {
    mode: string;
    steps?: (StepsEntity)[] | null;
}
export interface StepsEntity {
    color: string;
    value?: number | null;
}
export interface Custom {
    axisLabel?: string | null;
    axisPlacement?: string | null;
    barAlignment?: number | null;
    drawStyle?: string | null;
    fillOpacity?: number | null;
    gradientMode?: string | null;
    hideFrom?: HideFrom | null;
    lineInterpolation?: string | null;
    lineWidth?: number | null;
    pointSize?: number | null;
    scaleDistribution?: OperatorOrScaleDistribution | null;
    showPoints?: string | null;
    spanNulls?: boolean | null;
    align?: string | null;
    displayMode?: string | null;
    filterable?: boolean | null;
}
export interface HideFrom {
    graph: boolean;
    legend: boolean;
    tooltip: boolean;
}
export interface OperatorOrScaleDistribution {
    type: string;
}
export interface OverridesEntity {
    matcher: Matcher;
    properties?: (PropertiesEntity)[] | null;
}
export interface Matcher {
    id: string;
    options: string;
}
export interface PropertiesEntity {
    id: string;
    value?: number | Value;
}
export interface Value {
    fixedColor: string;
    mode: string;
}
export interface Options {
    content?: string | null;
    mode?: string | null;
    colorMode?: string | null;
    graphMode?: string | null;
    justifyMode?: string | null;
    orientation?: string | null;
    reduceOptions?: ReduceOptions | null;
    text?: DefaultsOrTextOrAlertRuleTagsOrGraphOrTimepicker1 | null;
    textMode?: string | null;
    displayLabels?: (null)[] | null;
    legend?: Legend1 | null;
    pieType?: string | null;
    alertThreshold?: boolean | null;
    graph?: DefaultsOrTextOrAlertRuleTagsOrGraphOrTimepicker2 | null;
    tooltipOptions?: ColorOrTooltipOptions1 | null;
    showThresholdLabels?: boolean | null;
    showThresholdMarkers?: boolean | null;
    showHeader?: boolean | null;
    sortBy?: (SortByEntity | null)[] | null;
}
export interface ReduceOptions {
    calcs?: (string)[] | null;
    fields: string;
    values: boolean;
}
export interface DefaultsOrTextOrAlertRuleTagsOrGraphOrTimepicker1 {
}
export interface Legend1 {
    displayMode: string;
    placement: string;
    values?: (string)[] | null;
    calcs?: (string)[] | null;
}
export interface DefaultsOrTextOrAlertRuleTagsOrGraphOrTimepicker2 {
}
export interface ColorOrTooltipOptions1 {
    mode: string;
}
export interface SortByEntity {
    desc: boolean;
    displayName: string;
}
export interface TargetsEntity {
    format: string;
    group?: (null)[] | null;
    metricColumn: string;
    rawQuery: boolean;
    rawSql: string;
    refId: string;
    select?: ((SelectEntityEntity)[] | null)[] | null;
    table: string;
    timeColumn: string;
    timeColumnType: string;
    where?: (WhereEntity)[] | null;
    hide?: boolean | null;
}
export interface SelectEntityEntity {
    params?: (string)[] | null;
    type: string;
}
export interface WhereEntity {
    name: string;
    params?: (null)[] | null;
    type: string;
}
export interface Alert {
    alertRuleTags: DefaultsOrTextOrAlertRuleTagsOrGraphOrTimepicker;
    conditions?: (ConditionsEntity)[] | null;
    executionErrorState: string;
    for: string;
    frequency: string;
    handler: number;
    name: string;
    noDataState: string;
    notifications?: (null)[] | null;
}
export interface DefaultsOrTextOrAlertRuleTagsOrGraphOrTimepicker {
}
export interface ConditionsEntity {
    evaluator: Evaluator;
    operator: OperatorOrScaleDistribution1;
    query: Query;
    reducer: Reducer;
    type: string;
}
export interface Evaluator {
    params?: (number)[] | null;
    type: string;
}
export interface OperatorOrScaleDistribution1 {
    type: string;
}
export interface Query {
    params?: (string)[] | null;
}
export interface Reducer {
    params?: (null)[] | null;
    type: string;
}
export interface AliasColors {
    'Moyenne en cours': string;
    'Moyenne en cours attente CIM': string;
    'Moyenne en cours hors attente CIM': string;
}
export interface Legend {
    alignAsTable: boolean;
    avg: boolean;
    current: boolean;
    max: boolean;
    min: boolean;
    rightSide: boolean;
    show: boolean;
    total: boolean;
    values: boolean;
}
export interface ThresholdsEntity {
    colorMode: string;
    fill: boolean;
    line: boolean;
    op: string;
    value: number;
    visible: boolean;
}
export interface Tooltip {
    shared: boolean;
    sort: number;
    value_type: string;
}
export interface TransformationsEntity {
    id: string;
    options: Options1;
}
export interface Options1 {
    byField: string;
}
export interface Xaxis {
    buckets?: null;
    mode: string;
    name?: null;
    show: boolean;
    values?: (null)[] | null;
}
export interface YaxesEntity {
    $$hashKey: string;
    format: string;
    label?: null;
    logBase: number;
    max?: null;
    min?: null;
    show: boolean;
}
export interface Yaxis {
    align: boolean;
    alignLevel?: null;
}
export interface Templating {
    list?: (ListEntity1)[] | null;
}
export interface ListEntity1 {
    allValue?: null;
    current: Current;
    description?: null;
    error?: null;
    hide: number;
    includeAll: boolean;
    label: string;
    multi: boolean;
    name: string;
    options?: (OptionsEntity | null)[] | null;
    query: string;
    queryValue?: string | null;
    skipUrlSync: boolean;
    type: string;
    datasource?: null;
    definition?: string | null;
    refresh?: number | null;
    regex?: string | null;
    sort?: number | null;
    tagValuesQuery?: string | null;
    tags?: (null)[] | null;
    tagsQuery?: string | null;
    useTags?: boolean | null;
}
export interface Current {
    selected: boolean;
    text?: (string)[] | null;
    value?: (string)[] | null;
}
export interface OptionsEntity {
    selected: boolean;
    text: string;
    value: string;
}
export interface Time {
    from: string;
    to: string;
}
