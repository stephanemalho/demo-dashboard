import { dashboard } from "@/data/dashboard";

export default function Home() {
  const data = dashboard;

  return (
    <>
      <div className="text-dark500_light700 flex w-full flex-col justify-between gap-4">
        <h1 className="h1-bold w-full">home</h1>
        <div className="w-full">
          <div>
            {Object.keys(data).map((key) => {
              const value = data[key];
              return (
                <div key={key}>
                  <h2>{key}</h2>
                  {key === "State" && (
                    <div className="bg-pink-500">
                      Value: {value.Value}
                    </div>
                  )}
                  {key === "RAM" && (
                    <div className="bg-green-500">
                      Value: {value.Value}
                    </div>
                  )}
                  {key === "Users" && (
                    <div className="bg-blue-500">
                      <ul>
                        {Object.keys(value).map((userKey) => (
                          <li key={userKey}>User {userKey}: {value[userKey]}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {key === "Threads" && (
                    <div className="bg-red-100">
                      {Object.keys(value).map((threadKey) => {
                        const thread = value[threadKey];
                        return (
                          <div key={threadKey}>
                            <div>ID: {thread.ID}</div>
                            <div>Type: {thread.Type}</div>
                            <div>Name: {thread.Name}</div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {key === "Logs" && (
                    <div className="bg-yellow-500">
                      <ul>
                        {Object.keys(value).map((logKey) => {
                          const logEntry = value[logKey];
                          return (
                            <li key={logKey}>
                              ID: {logEntry.ID}, Level: {logEntry.Level}, Message: {logEntry.Message}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
