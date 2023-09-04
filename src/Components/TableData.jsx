import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import Data from "./Data";
export default function TableData({ token }) {
  const [tableData, setTableData] = useState();
  //const [fetchError, setFetchError] = useState();

  const fetchTableData = async () => {
    try {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("uuid", token.user.id)
        .order("id", { ascending: false });
      if (data) {
        setTableData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div className="table_data">
      {tableData && (
        <div className="tasks">
          {tableData.map((data) => (
            <Data key={data.id} task={data} />
          ))}
        </div>
      )}
    </div>
  );
}
