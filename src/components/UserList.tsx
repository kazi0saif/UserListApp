import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./UserList.css";

interface User {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
  
    try {
      const response = await axios.get<{ data: User[]; page: number; total_pages: number }>(
        `https://reqres.in/api/users?page=${page}`
      );
      setUsers((prevUsers) => [...prevUsers, ...response.data.data]);
      setHasMore(response.data.page <= response.data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user">
          <img src={user.avatar} alt={user.first_name} />
          <div>
            {user.first_name} {user.last_name}
          </div>
          <div>{user.email}</div>
        </div>
      ))}
      {loading && <div className="">Loading...</div>}
      {!hasMore && <div className="">No more users</div>}
    </div>
  );
};

export default UserList;
