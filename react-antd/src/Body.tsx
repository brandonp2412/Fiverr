import { Badge, BadgeProps, Button, Calendar, Card, Timeline } from 'antd';
import { Dayjs } from 'dayjs';
import React from 'react';

export default function Body() {
  return (
    <main style={{ padding: 16, display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
      <Card title="What is this?" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>This is my example of using <Button style={{ padding: 0 }} type="link">React</Button> with
          <Button style={{ padding: 0 }} type="link">Ant Design</Button>
        </p>
        <p>React is a JavaScript library used to make websites.</p>
        <p>Ant design is Reacts most popular UI library.</p>
      </Card>
      <Calendar style={{ width: 300 }} fullscreen={false} />

      <Timeline>
        <Timeline.Item color='grey'>You request a website</Timeline.Item>
        <Timeline.Item>Basic prototype is uploaded</Timeline.Item>
        <Timeline.Item>Feedback is received and changes are made</Timeline.Item>
        <Timeline.Item color='green'>Your new website is complete!</Timeline.Item>
      </Timeline>
    </main>
  )
}
