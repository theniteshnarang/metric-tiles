export interface MetricType {
  id: string;
  displayName: string;
  isPercentageMetric: boolean;
}

export interface SegmentIdType {
  segmentId: string;
  displayName: string;
}

export interface SegmentType {
  segmentKey: string;
  displayName: string;
  values: Array<SegmentIdType>;
}

export interface GetMetricsResponse {
  data: Array<MetricType>;
}

export interface GetSegmentsResponse {
  data: Array<SegmentType>;
}

export interface PostSnapshotRequest {
  metric: string;
  segmentKey: string;
  segmentId: string;
}

export interface SnapshotType {
  date: string;
  value: number;
}

export interface Snapshot extends PostSnapshotRequest {
  values: Array<SnapshotType>;
}

export interface PostSnapshotResponse {
  data: Snapshot;
}
