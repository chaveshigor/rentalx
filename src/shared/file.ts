import fs from "fs";

async function deleteFile(filePath: string): Promise<boolean> {
  try {
    await fs.promises.stat(filePath);
  } catch (error) {
    return undefined;
  }

  await fs.promises.unlink(filePath);
  return true;
}

export { deleteFile };
