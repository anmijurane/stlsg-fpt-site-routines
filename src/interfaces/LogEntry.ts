export interface LogEntry {
  session_ref: string,
  club_id: string,
  client: {
    ip: string,
    browser: string,
    os: string,
    device: string
  },
  page: {
    path: string,
    query_string: string
  }
}
