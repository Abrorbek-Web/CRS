import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ArticleService, { User } from "../services/articles";

const AdminPanel: React.FC = () => {
  const [details, setDetails] = useState<User[]>([]);
  const navigate = useNavigate();

  const { t } = useTranslation();

  const columns = [
    {
      title: t("adminPanel.id"),
      dataIndex: "id",
      key: "id",
    },
    {
      title: t("adminPanel.firstName"),
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: t("adminPanel.lastName"),
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: t("adminPanel.phoneNumber"),
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: t("adminPanel.email"),
      dataIndex: "email",
      key: "email",
    },
    {
      title: t("adminPanel.details"),
      key: "details",
      render: (_: any, record: User) => (
        <Button
          type="primary"
          onClick={() => navigate(`/admin/details/${record.id}`)}
        >
          Detail
        </Button>
      ),
    },
    {
      title: t("adminPanel.status"),
      dataIndex: "status",
      key: "status",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ArticleService.getAdminDetails();
        setDetails(data);
      } catch (error) {
        console.error("Failed to fetch admin details:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-[2rem]">{t("adminPanel.adminPanel")}</h1>
      <Table
        dataSource={details}
        columns={columns}
        pagination={{ pageSize: 50 }}
        rowKey="id"
        bordered
      />
    </div>
  );
};

export { AdminPanel };
