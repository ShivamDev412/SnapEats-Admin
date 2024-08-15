import { StoreTypeData } from "@/redux/slice/api/adminSlice";
import { FC } from "react";
import { TableData, TableHead, TableRow } from "../Table";
import ToggleSwitch from "../ToggleSwitch";
const StoresListing: FC<{ stores: StoreTypeData[]; isFetching: boolean }> = ({
  stores,
  isFetching,
}) => {
  if (isFetching) return <p>Loading...</p>;
  return (
    <div className="overflow-x-auto overflow-y-hidden max-h-[70vh] mt-4">
      <table className="w-full">
        <thead className="bg-zinc-950 sticky top-0">
          <tr>
            <TableHead>Store Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Owner's Name</TableHead>
            <TableHead>Owner's Email</TableHead>
            <TableHead>Owner's Phone Number</TableHead>
            <TableHead>Email Verified</TableHead>
            <TableHead>Phone Number Verified</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Status</TableHead>
          </tr>
        </thead>
        {stores.map((user) => (
          <tbody key={user.id} className="bg-zinc-900">
            <TableRow>
              <TableData>{user?.name}</TableData>
              <TableData>{user?.email}</TableData>
              <TableData>
                {user.phoneNumber ? user.countryCode + user.phoneNumber : "N/A"}
              </TableData>
              <TableData>{user?.user?.name}</TableData>
              <TableData>{user?.user?.email}</TableData>
              <TableData>
                {user?.user?.phoneNumber
                  ? user?.user?.countryCode + user?.user?.phoneNumber
                  : "N/A"}
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
              <TableData>{user.address.address}</TableData>
              <TableData>{user.status}</TableData>
            </TableRow>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default StoresListing;
