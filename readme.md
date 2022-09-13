A valid update is a WebSocket message containing a JSON payload that has an phoneNumber and the newSteps (number) recently taken.
The server should ignore an update that isn't valid. The client will access WebSocket server by opening a connection to ws://localhost:8081. Here's an example of an update that the server needs to handle: { "phoneNumber": 9415749385,"newSteps": 17 }
Request GET http://localhost:8080/ucanji/api/v1/users/:phoneNumber/steps
Example: GET http://localhost:8080/ucanji/api/v1/users/9876543210/steps
Success Response: Code: 200 Body: { "cumulativeSteps": 183},cumulativeSteps represents the total steps of the most recent valid update for a user from the client. Error Response: Code: 404 (not found) Body: { "error": "User doesn't exist" }
Request POST http://localhost:3000/ucanji/api/v1/signUp it expects body as { "phoneNumber": 9415749385}. If the phone number is valid it returns response as:-
{
"status": "A new User created Successfully!!",
"phoneNumber": 9412953889
}
if Phone number exists already then it redirects to dashboard, the response is like:-
{
"status": "LoggedIn successfully",
"msg": "Redirected to dashboard page...."
}

TODO: write testcases.

Please reach me out on : 8528009242
