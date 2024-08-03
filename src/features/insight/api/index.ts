import httpClient from '@api/httpClient';
import { AxiosPromise } from 'axios';
import {
  GetMetricsResponse,
  GetSegmentsResponse,
  PostSnapshotRequest,
  PostSnapshotResponse,
} from './types';

export const getMetrics = (): AxiosPromise<GetMetricsResponse> =>
  httpClient({
    method: 'GET',
    url: '/metrics',
  });

export const getSegments = (): AxiosPromise<GetSegmentsResponse> =>
  httpClient({
    method: 'GET',
    url: '/segments',
  });

export const postSnapshot = (
  data: PostSnapshotRequest
): AxiosPromise<PostSnapshotResponse> =>
  httpClient({
    method: 'POST',
    url: '/snapshot',
    data,
  });

export * from './types';
