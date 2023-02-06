import { CodeBlock as GenericCodeBlock } from '@mintlify/components';
import { ReactNode, useContext } from 'react';

import AnalyticsContext from '@/analytics/AnalyticsContext';
import { Event } from '@/enums/events';
import { useColors } from '@/hooks/useColors';

export function CodeBlock({ filename, children }: { filename?: string; children?: ReactNode }) {
  const colors = useColors();
  const analyticsMediator = useContext(AnalyticsContext);
  const trackCodeBlockCopy = analyticsMediator.createEventListener(Event.CodeBlockCopy);

  return (
    <GenericCodeBlock
      filename={filename}
      filenameColor={colors.primaryLight}
      tooltipColor={colors.primaryDark}
      copiedTooltipColor={colors.primaryDark}
      onCopied={(_, textToCopy) => trackCodeBlockCopy({ code: textToCopy })}
    >
      {children}
    </GenericCodeBlock>
  );
}
