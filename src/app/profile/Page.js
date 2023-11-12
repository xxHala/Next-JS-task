"use client";
import React from "react";

const Page = () => {

  return (
    <div className="p-4">
      <p>
        Welcome, {user.displayName} - you are logged in to the profile page -
        a protected route.
      </p>
      ) : (
      <p>You must be logged in to view this page - protected route.</p>
      )}
    </div>
  );
};

export default Page;