import { DownOutlined, GithubOutlined, GitlabOutlined, InfoOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, Space } from "antd";

export default function Header() {
  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' },
  ];

  return (
    <header style={{ display: 'flex', gap: 16, padding: 16, alignItems: 'center' }}>
      <img style={{ paddingLeft: 40 }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20" />
      <h1 style={{ margin: 0, fontSize: 18, fontWeight: 'bold' }}>React + Ant Design</h1>
      <img style={{ height: 32 }} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
      <Input style={{ width: 280 }} size="large" placeholder="Search..." prefix={<SearchOutlined />} />
      <Dropdown menu={{ items }}>
        <a>
          <Space>
            More

            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <Button style={{ marginLeft: 'auto' }} icon={<GithubOutlined />} />
      <Button icon={<GitlabOutlined />} />
      <Button icon={<InfoOutlined />} />
    </header>
  )
}
