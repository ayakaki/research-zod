'use client';
import { useState } from 'react';
import { InputItem } from './inputItem';
import { z } from 'zod';

export const ZodTemplate: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  const userSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    age: z.number().max(120),
  });

  const handleParse = () => {
    try {
      const user = userSchema.parse({
        username: username,
        email: email,
        age: age,
      });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="m-5">
      <InputItem title="Username" text={username} setText={setUsername} />
      <InputItem title="Email" text={email} setText={setEmail} />
      <InputItem
        title="Age"
        text={age.toString()}
        setText={(text: string) => setAge(parseInt(text))}
      />
      <button className="mt-8 bg-gray-300 shadow p-2" onClick={handleParse}>
        確認
      </button>
    </div>
  );
};
