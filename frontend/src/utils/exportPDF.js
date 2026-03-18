import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export const exportDashboardPDF = async () => {

const dashboard = document.querySelector(".dashboard");

if (!dashboard) {
  alert("Dashboard not found");
  return;
}

// Temporarily expand the dashboard to its full scroll height so html2canvas captures everything
const originalHeight = dashboard.style.height;
const originalOverflow = dashboard.style.overflow;
dashboard.style.height = `${dashboard.scrollHeight}px`;
dashboard.style.overflow = "visible";

const canvas = await html2canvas(dashboard, {
  scale: 2,
  useCORS: true,
  allowTaint: true,
  scrollX: -window.scrollX,
  scrollY: -window.scrollY,
  windowWidth: document.documentElement.scrollWidth,
  windowHeight: document.documentElement.scrollHeight,
});

// Restore styles
dashboard.style.height = originalHeight;
dashboard.style.overflow = originalOverflow;

const imgData = canvas.toDataURL("image/png")

const pdf = new jsPDF("p", "mm", "a4");
const pageWidth = pdf.internal.pageSize.getWidth();
const pageHeight = pdf.internal.pageSize.getHeight();

const imgWidth = pageWidth;
const imgHeight = (canvas.height * imgWidth) / canvas.width;

const headerOffset = 30;

// Header background highlight
pdf.setFillColor(230, 230, 230); // light gray
pdf.rect(0, 5, pageWidth, 25, "F");

// Header text
pdf.setFontSize(18);
pdf.setTextColor(0, 0, 0);
pdf.text("CyberSentinel Cyber Threat Intelligence Report", 10, 15);

const reportNo = new Date().toISOString().replace(/[:.]/g, "-");

pdf.setFontSize(10);
pdf.text(`Generated: ${new Date().toLocaleString()}`, 10, 22);
pdf.text(`Report No: ${reportNo}`, pageWidth - 10, 22, { align: "right" });

let position = headerOffset;
let heightLeft = imgHeight - (pageHeight - headerOffset);

pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

while (heightLeft > 0) {
  pdf.addPage();
  position = heightLeft - imgHeight;
  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;
}


const fileName =
"CyberSentinel_Report_" +
new Date().toISOString().replace(/[:.]/g,"-") +
".pdf"

pdf.save(fileName)

}