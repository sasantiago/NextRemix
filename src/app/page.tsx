"use client";
import styles from "./page.module.css";
import { FormEvent, useEffect, useState } from "react";
import { useReadContract, useWriteContract, useWatchContractEvent } from 'wagmi';
import contract from "../../contract.json";

export default function Home() {

  const [message, setMessage] = useState<String>("");

  const { writeContract } = useWriteContract()

  const result = useReadContract({
    abi: contract.abi,
    address: contract.address as `0x${string}`,
    functionName: 'getMessage',
  })

  useEffect(() => {
    console.log({ result })
    setMessage(result.data as string);
  }, [result])

  useWatchContractEvent({
    abi: contract.abi,
    address: contract.address as `0x${string}`,
    eventName: 'messageChaged',
    onLogs(logs) {
      console.log('New logs!', logs);
      result.refetch()
    },
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const value = formData.get("message");
    writeContract({
      abi: contract.abi,
      address: contract.address as `0x${string}`,
      functionName: 'updateMessage',
      args: [value],
    })
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <w3m-button />
        </div>
      </div>

      <div className={styles.center}>
        <label className={styles.message}>{message}</label>
        <div>
          <form className={styles.form} onSubmit={onSubmit}>
            <input type="text" name="message" />
            <button type="submit">Cambiar Mensaje</button>
          </form>
        </div>
      </div>
    </main>
  );
}