import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { Form, Input, Button } from 'antd';
import { FormItem } from 'react-hook-form-antd';
import './App.modules.css';
const schema = zod.object({
  field1: zod.string().min(1, 'Campo obrigatório'),
  field2: zod.string().min(1, 'Campo obrigatório'),
  field3: zod.string().min(1, 'Campo obrigatório'),
  field4: zod.string().min(1, 'Campo obrigatório'),
});

type FormData = zod.infer<typeof schema>;

function App() {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="app-body">
      <Form onFinish={handleSubmit(onSubmit)} layout='vertical'>
        <FormItem name="field1" control={control}>
          <Input placeholder="Campo 1" />
        </FormItem>
        <FormItem name="field2" control={control}>
          <Input placeholder="Campo 2" />
        </FormItem>
        <FormItem name="field3" control={control}>
          <Input placeholder="Campo 3" />
        </FormItem>
        <FormItem name="field4" control={control}>
          <Input placeholder="Campo 4" />
        </FormItem>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default App;
