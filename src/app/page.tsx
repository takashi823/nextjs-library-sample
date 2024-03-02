import { SampleModal } from "@/components/SampleModal/SampleModal";
import { SampleTabs } from "@/components/SampleTabs/SampleTabs";
import { SampleTimeline } from "@/components/SampleTimeline/SampleTimeline";

export default function Home() {
  return (
    <div>
      <SampleModal />
      <SampleTabs />
      <SampleTimeline />
    </div>
  );
}
