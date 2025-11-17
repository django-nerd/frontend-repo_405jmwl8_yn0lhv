import * as Tabs from '@radix-ui/react-tabs'

export default function SpecTabs({items}){
  return (
    <Tabs.Root defaultValue={items[0]?.value || 'item1'} className="w-full">
      <Tabs.List className="flex border-b overflow-x-auto">
        {items.map(i => (
          <Tabs.Trigger key={i.value} value={i.value} className="px-4 py-2 text-sm font-medium data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
            {i.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {items.map(i => (
        <Tabs.Content key={i.value} value={i.value} className="py-4">
          {i.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
