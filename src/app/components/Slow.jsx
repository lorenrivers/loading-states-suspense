async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export async function SlowComponent() {
  await delay(5000);

  return (
    <div>
      <p className="text-green-400">Im very slow to load!</p>
    </div>
  );
}
