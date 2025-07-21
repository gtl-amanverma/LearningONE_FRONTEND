import { KanbanSquare } from "lucide-react";
import Link from "next/link";

export function BoardHeader() {
  return (
    <header className="w-full bg-gray-800 border-b border-gray-600 shadow-sm">
      <div className="px-4 h-16 flex items-center justify-between">
        <Link
          href="/auth/board"
          className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
        >
          <KanbanSquare className="h-8 w-8" />
          <h1 className="text-2xl font-headline font-bold">Kanban Board</h1>
        </Link>
        {/* Future placeholder for user profile or theme toggle */}
        <div></div>
      </div>
    </header>
  );
}
