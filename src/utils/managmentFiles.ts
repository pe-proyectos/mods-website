import JSZip from "jszip";

export const validateZipFile = async (file: File): Promise<boolean> => {
  const zip = new JSZip();
  try {
    const zipContent = await zip.loadAsync(file);
    const manifestFile = Object.keys(zipContent.files).find((filename) =>
      filename.endsWith("manifest.json")
    );
    return !!manifestFile;
  } catch {
    return false;
  }
};
