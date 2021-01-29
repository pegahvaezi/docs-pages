initSidebarItems({"macro":[["debug","Debug anything that can be formatted."],["entry_def","Implements a whole lot of sane defaults for a struct or enum that should behave as an entry. All the entry def fields are available as dedicated methods on the type and matching From impls are provided for each. This allows for both Foo::entry_def() and EntryDef::from(Foo::new()) style logic which are both useful in different scenarios."],["entry_defs","Shorthand to implement the entry defs callback similar to the vec![ .. ] macro but for entries."],["holochain_externs",""],["map_extern","Hides away the gross bit where we hook up integer pointers to length-prefixed guest memory to serialization and deserialization, and returning things to the host, and memory allocation and deallocation."]],"mod":[["capability",""],["entry",""],["guest_callback",""],["hash_path",""],["host_fn",""],["map_extern",""],["prelude",""],["x_salsa20_poly1305",""]]});