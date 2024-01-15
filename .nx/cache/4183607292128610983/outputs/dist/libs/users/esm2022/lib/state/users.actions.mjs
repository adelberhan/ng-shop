import { createAction, props } from '@ngrx/store';
// export const buildUserSession = createAction('[Users] Build User Session');
// export const buildUserSessionSuccess = createAction(
//   '[Users] Load Users Success',
//   props<{ user: User }>()
// );
// export const buildUserSessionFailure = createAction(
//   '[Users] Build User Session Failed'
// );
export const buildUserSession = createAction('[Users] Build User Session');
export const buildUserSessionSuccess = createAction('[Users] Build User Session Success', props());
export const buildUserSessionFailed = createAction('[Users] Build User Session Failed');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zdGF0ZS91c2Vycy5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSWxELDhFQUE4RTtBQUU5RSx1REFBdUQ7QUFDdkQsa0NBQWtDO0FBQ2xDLDRCQUE0QjtBQUM1QixLQUFLO0FBRUwsdURBQXVEO0FBQ3ZELHdDQUF3QztBQUN4QyxLQUFLO0FBRUwsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFFM0UsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsWUFBWSxDQUNqRCxvQ0FBb0MsRUFDcEMsS0FBSyxFQUFrQixDQUN4QixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsWUFBWSxDQUNoRCxtQ0FBbUMsQ0FDcEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgcHJvcHMgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBVc2Vyc0VudGl0eSB9IGZyb20gJy4vdXNlcnMubW9kZWxzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2R1bGVzL3VzZXInO1xuXG4vLyBleHBvcnQgY29uc3QgYnVpbGRVc2VyU2Vzc2lvbiA9IGNyZWF0ZUFjdGlvbignW1VzZXJzXSBCdWlsZCBVc2VyIFNlc3Npb24nKTtcblxuLy8gZXhwb3J0IGNvbnN0IGJ1aWxkVXNlclNlc3Npb25TdWNjZXNzID0gY3JlYXRlQWN0aW9uKFxuLy8gICAnW1VzZXJzXSBMb2FkIFVzZXJzIFN1Y2Nlc3MnLFxuLy8gICBwcm9wczx7IHVzZXI6IFVzZXIgfT4oKVxuLy8gKTtcblxuLy8gZXhwb3J0IGNvbnN0IGJ1aWxkVXNlclNlc3Npb25GYWlsdXJlID0gY3JlYXRlQWN0aW9uKFxuLy8gICAnW1VzZXJzXSBCdWlsZCBVc2VyIFNlc3Npb24gRmFpbGVkJ1xuLy8gKTtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkVXNlclNlc3Npb24gPSBjcmVhdGVBY3Rpb24oJ1tVc2Vyc10gQnVpbGQgVXNlciBTZXNzaW9uJyk7XG5cbmV4cG9ydCBjb25zdCBidWlsZFVzZXJTZXNzaW9uU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihcbiAgJ1tVc2Vyc10gQnVpbGQgVXNlciBTZXNzaW9uIFN1Y2Nlc3MnLFxuICBwcm9wczx7IHVzZXI6IFVzZXIgfT4oKVxuKTtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkVXNlclNlc3Npb25GYWlsZWQgPSBjcmVhdGVBY3Rpb24oXG4gICdbVXNlcnNdIEJ1aWxkIFVzZXIgU2Vzc2lvbiBGYWlsZWQnXG4pO1xuIl19