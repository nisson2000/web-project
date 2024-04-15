import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import services from "../services";

// you should design your register page and api
function CreateUserPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    avatar: null, // 這裡存放用戶選擇的頭貼文件
  });
  const [message, setMessage] = useState("");

  /** @type {React.ChangeEventHandler<HTMLInputElement>} */
  const handleTextInputChange = ({ target: { name, value } }) => {
    // const { name, value } = event.target
    // obj = { ...prev }; obj[name] = value
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /** @type {React.ChangeEventHandler<HTMLInputElement>} */
  const handleFileChange = ({ target: { files } }) => {
    if (files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        avatar: files[0],  // 假設只處理一個文件
      }));
    }
  };


  /** @type {React.FormEventHandler<HTMLFormElement>} */
  const handleFormSubmit = (event) => {
    /*services.user.createOne({ name: formData.username }).then((data) => {
      setMessage(JSON.stringify(data, null, 2));
    });
    setFormData({ username: "" });
    event.preventDefault();*/

    event.preventDefault();
    // 創建 FormData 對象以便發送文件數據
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('username', formData.username);
    formDataToSubmit.append('password', formData.password);
    if (formData.avatar) {
      formDataToSubmit.append('avatar', formData.avatar);
    }

    // 使用服務函數發送數據
    try {
      const data = await services.user.createOne(formDataToSubmit);
      setMessage(JSON.stringify(data, null, 2));
      setFormData({ username: "", password: "", avatar: null });
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create an account
            </h2>
          </div>
          <form onSubmit={handleFormSubmit}>
            <label>
              Username:
              <input type="text" name="username" value={formData.username} onChange={handleTextInputChange} />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleTextInputChange} />
            </label>
            <label>
              Upload Avatar (JPG, PNG):
              <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
            </label>
            <button type="submit">Register</button>
            <pre>{message}</pre>
          </form>
        </div>
      </div>
      <pre>{message}</pre>
    </>
  );
}

export default CreateUserPage;
