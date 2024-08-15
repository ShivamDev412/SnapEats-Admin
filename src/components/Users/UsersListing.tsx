import { UserType } from "@/redux/slice/api/adminSlice";
import { FC } from "react";
import { TableData, TableHead, TableRow } from "../Table";
import ToggleSwitch from "../ToggleSwitch";
const UsersListing: FC<{ users: UserType[]; isFetching: boolean }> = ({
  users,
  isFetching,
}) => {
  if (isFetching) return <p>Loading...</p>;
  return (
    <div className="overflow-x-auto overflow-y-hidden max-h-[70vh] mt-4">
      <table className="w-full">
        <thead className="bg-zinc-950 sticky top-0">
          <tr>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Email Verified</TableHead>
            <TableHead>Phone Number Verified</TableHead>
            <TableHead>Owns Store</TableHead>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody key={user.id} className="bg-zinc-900">
            <TableRow>
              <TableData>{user.name}</TableData>
              <TableData>{user.email}</TableData>
              <TableData>
                {user.phoneNumber ? user.countryCode + user.phoneNumber : "N/A"}
              </TableData>

              <TableData>
                {" "}
                <div className="flex justify-center w-full">
                  {" "}
                  <ToggleSwitch isChecked={user.emailVerified ? true : false} />
                </div>
              </TableData>
              <TableData>
                {" "}
                <div className="flex justify-center w-full">
                  {" "}
                  <ToggleSwitch
                    isChecked={user.phoneNumberVerified ? true : false}
                  />
                </div>
              </TableData>
              <TableData>
                <div className="flex justify-center w-full">
                  {" "}
                  <ToggleSwitch isChecked={user.storeId ? true : false} />
                </div>
              </TableData>
            </TableRow>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default UsersListing;
